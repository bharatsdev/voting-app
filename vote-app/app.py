import json
import socket

import flask
import redis
from flask import request, g, render_template
from flask_cors import CORS

app = flask.Flask(__name__)
CORS(app)

hostname = socket.gethostname()

redis_topic = "vote-channel"


@app.route('/', methods=['GET', 'POST'])
def index():
    return "Welcome to voting app....!"


def get_redis():
    if not hasattr(g, 'redis'):
        g.redis = redis.Redis(
            host="${REDIS_HOST:redis}",
            port=6379,
            password="",
            socket_timeout=5
        )

    return g.redis


@app.route("/vote", methods=['POST', 'GET'])
def add_vote():
    print(".......Add Vote to Redis Topic........")
    if request.method == 'POST':
        rsdb = get_redis()
        rsdb.pubsub()
        data = json.dumps(request.get_json())
        rsdb.publish(redis_topic, data)
        print(redis_topic)
        print(data)
        return data


if __name__ == '__main__':
    # app.run(host='0.0.0.0', port=5000, debug=True, threaded=True)
    app.run(host='0.0.0.0', port=5001, debug=True)
