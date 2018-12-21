import React, { PureComponent, Component } from 'react';
import marked from 'marked';
import { render } from 'react-dom';
import styled from 'styled-components';
import 'github-markdown-css/github-markdown.css';

const StyledPreview = styled.div`
		box-sizing: border-box;
		min-width: 200px;
		max-width: 980px;
		margin: 0 auto;
        padding: 45px;
        flex: 1;
        border-left: 2px solid mediumaquamarine;
`;

marked.setOptions({
    breaks: true,
});
const renderer = new marked.Renderer();

const renderMarkdown = (markdown:any):string => {
    return marked(markdown, { renderer: renderer })
}

export default class Preview extends Component<any> {

    render() {
        const {markdown} = this.props;
        return (
            <StyledPreview className="markdown-body">
                <div id="preview" dangerouslySetInnerHTML={{__html: renderMarkdown(markdown)}}></div>
            </StyledPreview>
        )
    }
}