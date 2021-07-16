package com.worker.service;

import com.worker.entity.Vote;

import java.util.List;

public interface VotingService {

    Vote addVote(Vote vote);

    List<Vote> getVote();
}
