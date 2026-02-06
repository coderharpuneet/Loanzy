package com.loanzy.loan_service.controller;

import com.loanzy.loan_service.entity.Loan;
import com.loanzy.loan_service.repository.LoanRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/loans")
@RequiredArgsConstructor
public class LoanController {

    private final LoanRepository loanRepository;

    @PostMapping
    public ResponseEntity<Loan> createLoan(@RequestBody Loan loan) {
        // Validation logic can go here
        loan.setStatus("Pending"); // Default status
        return ResponseEntity.ok(loanRepository.save(loan));
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<List<Loan>> getUserLoans(@PathVariable Long userId) {
        return ResponseEntity.ok(loanRepository.findByUserId(userId));
    }
}
