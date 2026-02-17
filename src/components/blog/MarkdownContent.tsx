import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import rehypeRaw from 'rehype-raw';
import 'highlight.js/styles/github-dark.css';

interface MarkdownContentProps {
  content: string;
}

const slugify = (text: unknown): string =>
  String(text)
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');

export function MarkdownContent({ content }: MarkdownContentProps) {
  return (
    <div className="prose prose-lg prose-slate dark:prose-invert max-w-none">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight, rehypeRaw]}
        components={{
          h1: ({ children }) => {
            const id = slugify(children);
            return (
              <h1 id={id} className="text-4xl font-bold mt-10 mb-4 scroll-mt-24">
                {children}
              </h1>
            );
          },
          h2: ({ children }) => {
            const id = slugify(children);
            return (
              <h2 id={id} className="text-3xl font-bold mt-10 mb-4 scroll-mt-24">
                {children}
              </h2>
            );
          },
          h3: ({ children }) => {
            const id = slugify(children);
            return (
              <h3 id={id} className="text-2xl font-semibold mt-8 mb-3 scroll-mt-24">
                {children}
              </h3>
            );
          },
          h4: ({ children }) => (
            <h4 className="text-xl font-semibold mt-6 mb-3 scroll-mt-24">{children}</h4>
          ),

          p: ({ children }) => (
            <p className="mb-5 leading-[1.8] text-foreground/90">{children}</p>
          ),

          a: ({ href, children }) => (
            <a
              href={href}
              className="text-primary hover:underline font-medium"
              target={href?.startsWith('http') ? '_blank' : undefined}
              rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
            >
              {children}
            </a>
          ),

          ul: ({ children }) => (
            <ul className="list-disc pl-6 mb-5 space-y-2">{children}</ul>
          ),
          ol: ({ children }) => (
            <ol className="list-decimal pl-6 mb-5 space-y-2">{children}</ol>
          ),
          li: ({ children }) => (
            <li className="leading-relaxed text-foreground/90">{children}</li>
          ),

          code: ({ className, children }) => {
            const isInline = !className;
            if (isInline) {
              return (
                <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono">
                  {children}
                </code>
              );
            }
            return <code className={className}>{children}</code>;
          },
          pre: ({ children }) => (
            <pre className="bg-slate-900 text-slate-100 p-5 rounded-xl overflow-x-auto mb-6 text-sm">
              {children}
            </pre>
          ),

          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-primary pl-6 py-1 my-6 italic text-muted-foreground bg-muted/30 rounded-r-lg">
              {children}
            </blockquote>
          ),

          img: ({ src, alt }) => (
            <img src={src} alt={alt} className="rounded-xl my-8 w-full" loading="lazy" />
          ),

          table: ({ children }) => (
            <div className="overflow-x-auto my-8 rounded-xl border border-border">
              <table className="min-w-full divide-y divide-border">{children}</table>
            </div>
          ),
          thead: ({ children }) => <thead className="bg-muted">{children}</thead>,
          tbody: ({ children }) => (
            <tbody className="divide-y divide-border bg-background">{children}</tbody>
          ),
          tr: ({ children }) => <tr>{children}</tr>,
          th: ({ children }) => (
            <th className="px-5 py-3 text-left text-sm font-semibold">{children}</th>
          ),
          td: ({ children }) => <td className="px-5 py-3 text-sm">{children}</td>,

          hr: () => <hr className="my-10 border-border" />,
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
