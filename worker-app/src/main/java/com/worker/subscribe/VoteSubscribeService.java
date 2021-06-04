package com.worker.subscribe;

import com.worker.entity.Vote;
import com.worker.repos.VotingRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.redis.connection.ReactiveSubscription;
import org.springframework.data.redis.core.ReactiveRedisOperations;
import org.springframework.data.redis.listener.ChannelTopic;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;

@Service
public class VoteSubscribeService {

    @Autowired
    private VotingRepo votingRepo;

    @Autowired
    private ReactiveRedisOperations<String, Vote> reactiveRedisTemplate;

    @Value("${topic.name:vote-channel}")
    private String topic;

    @PostConstruct
    private void init() {
        System.out.println(" Subscribe Redis Topic ");
        this.reactiveRedisTemplate
                .listenTo(ChannelTopic.of(this.topic))
                .map(ReactiveSubscription.Message::getMessage)
                .subscribe(vote -> {
                    if (this.votingRepo.findById(vote.getId()).isPresent()) {
                        this.votingRepo.findById(vote.getId()).map(this::setVoteCount)
                                .ifPresent(this.votingRepo::save);
                    } else {
                        this.votingRepo.save(vote);
                    }
                });
    }

    public Vote setVoteCount(Vote v) {
        return new Vote(v.getId(), v.getCount() + 1);
    }

}