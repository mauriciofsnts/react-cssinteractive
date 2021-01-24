import React from 'react';
import PropTypes from 'prop-types';
import { Row } from 'reactstrap';

function CodePreview({ open, children, copyCallback }) {
  const copyToClipboard = () => {
    const ta = document.createElement('textarea');
    const bxshadow = document.getElementById('codeCopyId').textContent;

    ta.innerText = bxshadow;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    ta.remove();

    copyCallback(true);
  };

  return (
    <div>
      {open && (
        <Row noGutters className="p-3 bg-light rounded" onClick={copyToClipboard}>
          <p id="codeCopyId">
            {children}
          </p>
        </Row>
      )}
    </div>
  );
}

CodePreview.propTypes = {
  open: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  copyCallback: PropTypes.func.isRequired,
};

export default CodePreview;
