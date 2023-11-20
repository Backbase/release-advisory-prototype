import { Component, ViewChild, importProvidersFrom } from '@angular/core';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';
import { Editor } from '@ckeditor/ckeditor5-core';
import { EditorModule } from '@tinymce/tinymce-angular';
import { FormsModule } from '@angular/forms';
import { QuillModule } from 'ngx-quill';
import { MyMarkdownModule } from './markdown.module';

@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.scss'],
  standalone: true,
  imports: [CKEditorModule, EditorModule, FormsModule, QuillModule, MyMarkdownModule],
})
export class TextEditorComponent {
  data: any = `<p>Hello, world I am CKeditor!</p>`;
  Editor = ClassicEditor;
  @ViewChild('myEditor', { static: false }) myEditor: any;
  retrieveddata: string = this.data;
  htmlContent = '<p>Hello, world I am TinyMCE!</p>';
  model: string = '';
  markdown = `## Markdown __rulez__!
  ---
  
  ### Syntax highlight
  \`\`\`typescript
  const language = 'typescript';
  \`\`\`
  
  ### Lists
  1. Ordered list
  2. Another bullet point
     - Unordered list
     - Another unordered bullet
  
  ### Blockquote
  > Blockquote to the max`;

  modules: {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'], // toggled buttons
      ['blockquote'],
      // [{'header': 1}, {'header': 2}],               // custom button values
      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ script: 'sub' }, { script: 'super' }], // superscript/subscript
      [{ indent: '-1' }, { indent: '+1' }], // outdent/indent
      [{ direction: 'rtl' }], // text direction
      // [{'size': ['small', false, 'large', 'huge']}],  // custom dropdown
      // [{'header': [1, 2, 3, 4, 5, 6, false]}],
      // [{'color': []}, {'background': []}],          // dropdown with defaults from theme
      // [{'font': []}],
      [{ align: [] }],
      ['clean'], // remove formatting button
      // ['link', 'image', 'video',]                   // link and image, video
      ['link'] // link
    ];
  };
  getDataEditor() {
    alert(this.retrieveddata);
  }

  public onChange({ editor }: ChangeEvent) {
    const data = editor.data.get();
    this.retrieveddata = data;
  }

  public getDataTiny() {
    alert(this.htmlContent);
  }

  public getDataQuill() {
    alert(this.model);
  }
}
