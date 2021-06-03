package com.worker;

import com.worker.entity.Vote;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.redis.connection.lettuce.LettuceConnectionFactory;
import org.springframework.data.redis.core.ReactiveRedisOperations;
import org.springframework.data.redis.core.ReactiveRedisTemplate;
import org.springframework.data.redis.serializer.Jackson2JsonRedisSerializer;
import org.springframework.data.redis.serializer.RedisSerializationContext;
import org.springframework.data.redis.serializer.RedisSerializer;
import org.springframework.scheduling.annotation.EnableScheduling;

@EnableScheduling
@SpringBootApplication
public class WorkerAppApplication {

    public static void main(String[] args) {
        SpringApplication.run(WorkerAppApplication.class, args);
    }

    @Bean
    public ReactiveRedisOperations<String, Vote> voteTemplate(LettuceConnectionFactory lettuceConnectionFactory){
        RedisSerializer<Vote> valueSerializer = new Jackson2JsonRedisSerializer<>(Vote.class);
        RedisSerializationContext<String, Vote> serializationContext = RedisSerializationContext.<String, Vote>newSerializationContext(RedisSerializer.string())
                .value(valueSerializer)
                .build();
        return new ReactiveRedisTemplate<String, Vote>(lettuceConnectionFactory, serializationContext);
    }

}
