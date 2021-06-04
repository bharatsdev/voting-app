package com.worker.repos;

import com.worker.entity.Vote;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VotingRepo extends JpaRepository<Vote, Long> { }
