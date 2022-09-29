import { useState } from 'react';
import MarkdownIt from 'markdown-it';
import { Button } from '@nextui-org/react';
import hljs from 'highlight.js';
import 'highlight.js/styles/a11y-dark.css';

import { CheckIcon, CopyIcon } from '@/Components/Icons';
import { TextCodeStyle } from './style';

const md: any = new MarkdownIt({
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return (
          '<pre class="hljs"><code>' +
          hljs.highlight(str, { language: lang, ignoreIllegals: true }).value +
          '</code></pre>'
        );
      } catch (__) {}
    }

    return (
      '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>'
    );
  }
});

type BlockCodeProps = {
  code: string;
  className?: string;
  language?: 'typescript' | 'bash' | 'JSON';
};

const BlockCode = ({
  code,
  language = 'typescript',
  className = ''
}: BlockCodeProps) => {
  const [copied, setCopied] = useState(false);

  const onClear = () => {
    return setTimeout(() => {
      setCopied(false);
    }, 5000);
  };

  const onCopy = async () => {
    if (copied) {
      clearTimeout(onClear());
      return setCopied(false);
    }

    await navigator.clipboard.writeText(code);

    setCopied(true);
    onClear();
  };

  return (
    <div className={`relative ${className}`}>
      <TextCodeStyle
        className="mb-4 pr-11 text-white"
        dangerouslySetInnerHTML={{
          __html: md.render('```' + `${language}\n` + code + '\n```')
        }}
      />

      <Button
        auto
        onClick={onCopy}
        className="absolute top-2 right-3 p-0 h-auto w-auto bg-transparent border-r-0 text-slate-600"
        icon={
          copied ? (
            <CheckIcon className="text-2xl text-green-400" />
          ) : (
            <CopyIcon className="text-2xl text-gray-500" />
          )
        }
      />
    </div>
  );
};

export default BlockCode;
