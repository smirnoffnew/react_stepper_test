import React, { Component } from "react";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

class TextEditor extends Component {


    render() {
        return (
            <div style={{ marginLeft: '1%' }}>
                <label style={{ color: "grey", marginLeft: '2%', fontSize: '85%' }}>
                    Description
                </label>
                {
                    <CKEditor
                        id="editor"
                        editor={ClassicEditor}
                        onChange={(event, editor) => {
                            const data = editor.getData();
                            this.props.onChange('Description', data)
                        }}
                    />
                }
            </div>
        );
    }
}

export default TextEditor;
