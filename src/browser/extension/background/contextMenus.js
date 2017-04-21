import { popWindow } from 'extension/utils/windows';

const menus = [
  ['UrgBenri', ['all'], () => popWindow('window')] // 'window' - is the html page name
];

function addToMenu(title, contexts, onclick, moreOptions) {
  chrome.contextMenus.create({
    title,
    contexts,
    onclick,
    ...moreOptions
  });
}

export default function createMenu() {
  menus.forEach(menu => { addToMenu(...menu); });
}
