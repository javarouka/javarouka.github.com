export const getNode = (query) => document.querySelectorAll(query);
export const removeClassOnNode = (nodeList, clzName) => {
    nodeList.forEach(node => node.classList.remove(clzName));
};