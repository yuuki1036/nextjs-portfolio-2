import Spec from "types/spec";

const createData = (name: string, value: string) => {
  return { name, value };
};

// データ構造変換
export const createRows = (specs: Spec) => {
  return [
    ...Object.entries(specs).map(([name, value]) =>
      createData(name, value),
    ),
  ];
};
