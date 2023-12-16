# jeremy-reusable-modal

## Installation

```terminal
npm install jeremy-reusable-modal
or
yarn add jeremy-reusable-modal
```

## Introduction

```tsx
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <Modal portalId='portal' />
  </React.StrictMode>
);
```

### Modal

isModalOpen의 상태에 따라 모달을 돔에 부착시켜주는 컴포넌트입니다.

- portalId : 모달을 부착시킬 DOM element의 id를 입력받습니다. 기본값은 'root'입니다. 전역상태 isModalOpen을 통해 createPortal을 통해 모달을 마운트하기때문에 최상위 컴포넌트에서 한번만 호출하는걸 권장드립니다.

### Trigger

모달을 열어주는 컴포넌트입니다.

- as : ReactElement를 인자로 받아 클릭시 모달을 열어주는 함수를 부착하여 반환합니다.

### Overlay

- as : 모달의 Backdrop 역할을 하는 함수입니다. ReactElement를 인자로 받아 클릭시 모달을 닫아주는 함수를 부착하여 반환합니다.

### Closer

- as : ReactElement를 인자로 받아 클릭시 모달을 닫아주는 함수를 부착하여 반환합니다.

### useModal

```ts
const { openModal, closeModal } = useModal();
```

- openModal : 모달을 열어주는 함수입니다.
- closeModal : 모달을 닫아주는 함수입니다.

## Dependencies

```
zustand
```
