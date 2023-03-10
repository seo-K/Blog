# Three js

![alt text](./image/three.png)
![alt text](./image/three3.png)

- Renderer - Scene(장면) - Light (광원)
-                        ㄴMesh (Object3D) - Geometry (형상 정의)
-                                          ㄴMaterial (색상 및 투명도)
-          ㄴ Camera (시점 = 카메라)

# BufferGeometry

![alt text](./image/three2.png)

## 메쉬, 선, 점 기하학의 표현입니다.

- BoxGeometry (박스)
  - ex) const geometry = new THREE.BoxGeometry(1, 1, 1); (가로,세로,깊이)
- CircleGeometry (원형)
  - ex) CircleGeometry(1, 8, 0, Math.PI X 2); [반지름, 원판을 구성하는 분할개수/세그먼트 수 = 값이 클수록 완전한 형태의 원형(기본8), 시작각도, 연장각도(기본 2PI = 360도)]
- ConeGeometry (원뿔형)
  - ex) ConeGeometry(1, 1, 8, 1, false, 0, Math.PI X 2); [반지름, 높이, 둘레 분할개수, 높이 분햘 개수/층, 밑면 여부, 시작각, 연장각]
- CylinderGeometry (원통형)
  - ex) CylinderGeometry(1, 1, 1, 8, 1, false, 0, Math.PI X 2); [윗면반지름, 아랫면반지름, 높이, 둘레 분할개수, 높이 분할 개수, 밑면 여부, 시작각, 연장각]
- SphereGeometry (구형)
  - ex) SphereGeometry(1, 32, 16, 0, Math.PI X 2, 0, PI) [반지름, 수평방향 분할 수, 수직방향 분할 수 , 수평방향 시작각, 수평방향 연장각, 수직방향 시작각, 수직방향 연장각]
- RingGeometry (링모형)
  - ex) RingGeometry(0.5, 1, 8, 1, 0, Math.PI X 2); // [내부반지름 , 내부반지름, 가장자리 둘레방향 분할개수, 링내부방향 분할개수, 시작각, 연장각]
- PlaneGeometry (사각형) (gis 지리정보시스템 3차원지형 표현시 유용)
  - ex) PlaneGeometry(1, 1, 1, 1); //[ 너비, 높이, 너비방향 분할수, 높이방향 분할 수]
- TorusGeometry (반지모형) (2차원 원이 360도 돌아가있다고 생각하면됨)
  - ex) TorusGeometry(1, 0.4, 8, 6, Math.PI X 2 ); // [ 반지름, 돌아가는 내부원형 반지름 값, 방사방향, 돌아가는 내부원형 수, 연장각길이]
- TorusKnotGeometry (매듭모형)
  - ex) TorusKnotGeometry(1, 0.4, 20, 30, 3, 4); // [ 반지름, 구성 원통 반지름크기, 원형 수, 원형내부 분할수, 꺾임반복횟수?, 꺾임 ]

### 선

![alt text](https://mblogthumb-phinf.pstatic.net/20121013_234/javaking75_13500553141650YoRa_PNG/2012-10-13_002043.png?type=w2)

- quadraticCurveTo(제어점x, 제어점y, 종료점x, 종료점y)
- bezierCurveTo(제어점x, 제어점y, 제어점x2, 제어점y2, 종료점x, 종료점y)

###

- ExtrudeGeometry (평면 shape에 깊이갚을 부여 + mesh의 윗면과 아랫면을 비스듬하게 처리 === 베벨링)
- TextGeometry [ExtrudeGeometry의 파생클래스]
- LatheGeometry (선을 y축 회전하여 얻어지는 3차원 mesh)
  - LatheGeometry(path, 분할수(12), 시작각(0), 연장각(2PI))
- ParametricGeometry (수학적 함수식에 2개의 값을 입력하여 얻을 수 있는 좌표로 구성)
- TubeGeometry (튜브형태로 곡선 구성)
  - TubeGeometry(path, 튜브의 진행방향 분할 수/충(64), 튜브의 원통 반지름(1), 원통 분할 수(8)), 원통 닫을지 여부(false)
- EdgesGeometry (기하학을 구성하는 인접면의 각도에 따라 기하학을 재구성)
- ShapeGeometry (평면 도형 구성)
- WireframeGeometry (외각선 추가)

- PolyhedronGeometry
  - (IcosahedronGeometry [20면체], OctahedronGeometry [8면체], DodecahedronGeometry [12면체],TetrahedronGeometry [4면체])

### bufferGeometry

- 정점(Vertex) = xyz 좌표
- 정점 인덱스(Vertex Index) = 면을 구성
- 수직 벡터(Normal Vector)
- 정점 색상(Vertex Color)
- 텍스트 멥핑을 위한 UV 좌표
- 사용자 정의 데이터

# Object3D

- Mesh (3각형 면)
- Line (선)
- Points (점)

## 속성

![alt text](./image/three4.png)

- position (x, y, z) 기본값 0
- rotation (x, y, z 의 회전값) 기본값 0
- scale (x, y, z 의 scale) 기본값 1

# secen graph

![alt text](./image/three5.png)

1. 태양 객체 생성

- 크기 지정 및 재질 추가

2. 지구 추가

- 지구 객체 생성
- 태양의 자식으로 지구를 추가하는 코드 추가
- 지구에대한 재질 추가

3. 달 추가

- 달 객체 생성
- 지구의 자식으로 달을 추가하는 코드 추가
- 달에대한 재질 추가

4. 자전과 공전을 위해 메서드를 따로 불러오고 update 에 해당 y축 회전 값 추가

# Material

![alt text](./image/three6.png)

- PointMaterial (point 타입 object3D 객체를 위한 재질)
  - LineBasicMaterial (Line 타입 object3D 객체를 위한 재질)
  - LineDashedMaterial

## Mesh 타입 Object3D 객체를 위한 재질

- MeshBasicMaterial
- MeshLambertMaterial
- MeshPhongMaterial
- MeshStandardMaterial
  - MeshPhysicalMaterial
- MeshDepthMaterial
- MeshNormalMaterial
- MeshToonMaterial
