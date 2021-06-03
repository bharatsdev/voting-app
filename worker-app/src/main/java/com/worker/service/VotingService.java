package com.worker.service;

import com.worker.entity.Vote;
import com.worker.repos.VotingRepo;
import org.springframework.beans.factory.annotation.Autowired;

public interface VotingService {

     Vote addVote(Vote vote);
}
