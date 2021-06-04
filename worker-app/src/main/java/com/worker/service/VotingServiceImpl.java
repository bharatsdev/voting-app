package com.worker.service;

import com.worker.entity.Vote;
import com.worker.repos.VotingRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class VotingServiceImpl implements   VotingService{

    @Autowired
    VotingRepo votingRepo;

    @Override
    public Vote addVote(Vote vote){
      return   this.votingRepo.save(vote);
    }
}
