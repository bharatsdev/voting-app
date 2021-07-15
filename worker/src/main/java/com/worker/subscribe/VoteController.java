package com.worker.subscribe;

import com.worker.entity.Vote;
import com.worker.repo.VotingRepo;
import com.worker.service.VotingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.PostConstruct;
import java.util.ArrayList;
import java.util.List;

@Component
public class VoteController {
    @Autowired
    VotingService votingService;

    @PostConstruct
    @Transactional(readOnly = false)
    public void voteTest() {
        List<Vote> votes = new ArrayList<>();
        votes.add(new Vote(1, 2));
        votes.add(new Vote(2, 2));
        votes.add(new Vote(3, 2));
        votes.stream().forEach(x -> votingService.addVote(x));
        System.out.println(votingService.getVote());
    }
}
