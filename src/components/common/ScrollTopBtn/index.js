import React, { useCallback } from 'react';

const topShowHidden = () => {
  let _prevScrTop = 0, _currentScrTop, _prevDir, _currentDir;
  const $body = document.querySelector('body');

  return (current) => {
    if (current === 0) { $body.classList.remove('scrUp'); }

    _currentScrTop = current || 0;

    if (_prevScrTop === _currentScrTop) { return; }

    _currentDir = _currentScrTop > _prevScrTop ? 'scrDown' : 'scrUp';
    _prevScrTop = _currentScrTop;

    if (_prevDir === _currentDir) { return; }

    _prevDir = _currentDir;

    $body.classList.remove(_currentDir === 'scrUp' ? 'scrDown' : 'scrUp');
    $body.classList.add(_currentDir);
  };
};

const globalScroll = topShowHidden();

document.addEventListener('scroll', () => {
  const _scrollTop = window.scrollY;
  globalScroll(_scrollTop);
});

const ScrollTopBtn = () => {
  const onClickTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  return (
    <button type="button" id="scrollTopBtn" className="scroll-top-btn" onClick={onClickTop}>Top</button>
  );
};

export default ScrollTopBtn;