import Spec from "./spec";

type Post = {
  slug: string;
  title: string;
  excerpt: string;
  otherImage: boolean;
  date: string;
  launch?: string;
  source?: string;
  tag: string[];
  overView: string[];
  chronology?: string[];
  spec: Spec;
  main: string[];
  others?: string[];
  learned?: string[];
};

export default Post;
