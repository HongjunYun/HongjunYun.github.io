# 1. 베이스 이미지 설정 (Andy님의 Docker 추천 버전 적용)
FROM node:slim

# 2. 컨테이너 내부 작업 디렉토리 설정
WORKDIR /app

# 3. 호스트의 package 파일들을 컨테이너로 복사
COPY package*.json ./

# 4. 핵심: 컨테이너 내부(Linux) 환경에 맞춰서 직접 설치
# 이렇게 하면 Mac용 부품이 아닌 Linux용 Rollup 부품이 깔립니다.
RUN npm install

# 5. 나머지 소스 코드 복사
COPY . .

# 6. Astro 기본 포트 개방
EXPOSE 4321

# 7. 실행 명령어
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]