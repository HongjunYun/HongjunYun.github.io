---
title: "맞춤형 소통 단말기"
summary: "말하기와 손글씨 사용이 어려운 사용자를 위한 전용 키보드 및 ESP32-S3 기반 화면형 대체 대화기기"
date: 2026-05-31
updatedDate: 2026-07-19
tags:
  - C
  - Assistive Technology
  - AAC
  - Embedded
  - ESP32-S3
  - USB HID
  - HCI
  - Programming
  - Ongoing Project
category: "Ongoing Projects"
draft: false
---
# Overview

말하기가 어렵고 손글씨 사용에도 제약이 있는 사용자를 위해,
전용 키보드와 화면 기반 대체 대화기기를 개발하는 개인 프로젝트입니다.

사용자가 키보드로 입력한 문장을 큰 화면에 표시하고,
향후 보호자용 기기로도 전달할 수 있는 독립형 소통 단말기를 목표로 합니다.

## System

프로젝트는 두 개의 장치로 나누어 개발하고 있습니다.

1. 표준 USB HID 방식의 전용 키보드
2. ESP32-S3 기반 화면 및 통신 단말기

두 장치는 독자 규격으로 강하게 결합하지 않고,
일반 USB HID 규격을 사용해 각각 독립적으로 시험하고 교체할 수 있도록 설계하고 있습니다.

## Current Status

### Completed

- 사용자 요구사항과 초기 구조 정의
- 7인치 ESP32-S3 개발보드 선정
- 화면 및 터치 기본 동작 확인
- 한글 폰트 출력 환경 구성
- 한글 입력기 기초 구현

### In Progress

- USB HID Host 입력 처리
- 한글 입력기와 화면 UI 통합
- 화면 표시 및 글자 크기 조절 기능 개발

### Planned

- 전용 USB HID 키보드 시제품 제작
- 보호자용 수신 기기
- ESP-NOW 기반 무선통신
- 배터리 기반 이동식 구동
- 사용자 시험과 인터페이스 개선

## Development Log

### 1. 요구사항과 초기 설계

사용자의 신체적 조건과 기존 소통 방식을 분석하고,
전용 키보드와 화면 단말기의 초기 구조를 정리했습니다.

[[개발로그 1편 읽기]](/blog/06-devlog_assistive_communication_device/)

### 2. 첫 프로토타입을 위한 하드웨어 선택

소형 컴퓨터 대신 저전력 임베디드 시스템을 선택한 이유와,
7인치 Waveshare ESP32-S3 개발보드를 선정한 과정을 정리했습니다.

[[개발로그 2편 읽기]](/blog/07-devlog_assistive_communication_device_hardware_selection/)


---
## Project Status

이 페이지는 프로젝트 진행 상황과 개발로그가 추가될 때마다 계속 갱신합니다.