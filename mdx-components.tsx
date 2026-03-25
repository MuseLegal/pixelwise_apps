import type { MDXComponents } from 'mdx/types';
import { VideoEmbed } from '@/components/video-embed';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
 codex/convert-static-html-to-next.js-mdx-app-73bfih
    h2: (props) => <h2 className="mdx-h2" {...props} />,
    h3: (props) => <h3 className="mdx-h3" {...props} />,
    p: (props) => <p className="mdx-p" {...props} />,
    ul: (props) => <ul className="mdx-ul" {...props} />,
    ol: (props) => <ol className="mdx-ol" {...props} />,
    li: (props) => <li className="mdx-li" {...props} />,

    h1: (props) => <h1 className="mdx-h1" {...props} />,
    h2: (props) => <h2 className="mdx-h2" {...props} />,
    p: (props) => <p className="mdx-p" {...props} />,
    ul: (props) => <ul className="mdx-ul" {...props} />,
    ol: (props) => <ol className="mdx-ol" {...props} />,
 main
    VideoEmbed,
    ...components,
  };
}
