import type { MDXComponents } from 'mdx/types';
import { VideoEmbed } from '@/components/video-embed';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (props) => <h1 className="mdx-h1" {...props} />,
    h2: (props) => <h2 className="mdx-h2" {...props} />,
    p: (props) => <p className="mdx-p" {...props} />,
    ul: (props) => <ul className="mdx-ul" {...props} />,
    ol: (props) => <ol className="mdx-ol" {...props} />,
    VideoEmbed,
    ...components,
  };
}
