import type { SceneRendererProps } from "react-native-tab-view";

export type SceneProps = SceneRendererProps & {
  route: {
    key: string;
    title: string;
  };
};
