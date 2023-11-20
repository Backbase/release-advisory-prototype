// markdown.module.ts

import { NgModule } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';
import 'prismjs';
import 'prismjs/components/prism-typescript.min.js';
import 'prismjs/plugins/line-numbers/prism-line-numbers.js';
import 'prismjs/plugins/line-highlight/prism-line-highlight.js';
@NgModule({
  imports: [MarkdownModule.forRoot()],
  exports: [MarkdownModule],
})
export class MyMarkdownModule {}
