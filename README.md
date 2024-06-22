## clean-architecture-with-react-boilerplate

### Step 1. 설치
```
npm create vite@latest
npm install -D prettier eslint-plugin-prettier
```
### 디렉토리 구성
- pages
  - 역할: 페이지 컴포넌트 집합
  - 규칙: react-router 는 해당 폴더에 존재하는 컴포넌트들만 접근할 수 있어야 함 
- components
  - 역할 재사용 가능한 UI 컴포넌트 집합
  - 규칙: 특정 페이지에 종속된 컴포넌트들은 존재하면 안됨
- application
  - 역할: 비즈니스 로직 처리
  - 규칙: 페이지/컴포넌트에는 비지니스 로직이 존재하면 안됨
  - 예시: 상태 관리, 서비스, 유스케이스, 액션
- infrastructure
  - 역할: 외부 서비스와의 통신, API 호출 등을 처리
  - 규칙: 외부와의 상호작용은 모두 `infrastructure`를 거쳐서 가야함
- domain
  - 역할: 애플리케이션의 핵심 도메인 로직과 엔티티를 관리
  - 규칙: 애플리케이션의 비즈니스 규칙과 도메인 관련 로직을 정의해야 함
- lib
  - 역할: 유틸리티 함수와 공통 라이브러리 집합
  - 규칙: DRY(Don't repeat yourself)를 지키기 위해 공통된 함수, 모듈들이 존재해야 함

![DDD.svg](..%2F..%2Fgithub%2FDDD.svg)

