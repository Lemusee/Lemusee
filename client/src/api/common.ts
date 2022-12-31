// promise 요청 타임아웃 시간 선언
const TIME_OUT = 120*1000; //20분

// 에러 처리를 위한 status 선언
export const statusError = (error?:string | unknown) => {
  return {
    status: false,
    json: {
      error: [error]
    }
  };
};

// promise 타임아웃 처리
export async function timeout<T>(promise: Promise<T>): Promise<T> {
  let timer: NodeJS.Timeout;
  const res = await Promise.race([
    promise,
    new Promise<'timeout'>(resolve => {
      timer = setTimeout(() => resolve('timeout'), TIME_OUT);
    })
  ] as const).finally(() => clearTimeout(timer));

  if (res === 'timeout') {
    throw new Error(`${TIME_OUT}ms timeout`);
  }
  return res;
};