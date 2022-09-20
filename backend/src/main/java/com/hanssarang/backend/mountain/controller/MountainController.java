package com.hanssarang.backend.mountain.controller;

import com.hanssarang.backend.mountain.controller.dto.MountainResponse;
import com.hanssarang.backend.mountain.service.MountainService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/v1/mountains")
public class MountainController {

    private final MountainService mountainService;

    @GetMapping
    public ResponseEntity<List<MountainResponse>> getMountains(@RequestHeader("Authorization") String token) {
        return ResponseEntity.ok(mountainService.getMountains());
    }

    @GetMapping("/1/{mountainId}")
    public ResponseEntity<MountainResponse> getMountain(@RequestHeader("Authorization") String token, @PathVariable int mountainId) {
        return ResponseEntity.ok(mountainService.getMountain(mountainId));
    }

    @GetMapping("/2")
    public ResponseEntity<MountainResponse> searchMountain(@RequestHeader("Authorization") String token, @RequestParam String name) {
        return ResponseEntity.ok(mountainService.searchMountain(name));
    }
}