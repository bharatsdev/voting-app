package com.worker.service;

import com.worker.entity.Vote;
import com.worker.repo.VotingRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VotingServiceImpl implements VotingService {

    @Autowired
    public VotingRepo votingRepo;

    @Override
    public Vote addVote(Vote vote) {
        return this.votingRepo.save(vote);
    }

    @Override
    public List<Vote> getVote() {
        return this.votingRepo.findAll();
    }
}
