import Tree from './components/directory-tree-view'
import './components/style.css'

const directory = ({ treeData, onNodeClick, skin }) => {
    const openFolder = folder => {
        const dir = document.getElementById(`${folder.id}+dir`)
        const arrow = document.getElementById(`${folder.id}+arrow`)
        if (folder.isOpen) { // Close
            dir.classList.toggle('tree-dir-close')
            arrow.classList.toggle('tree-arrow-rotate-left')
        } else {    // Open
            dir.classList.toggle('tree-dir-open')
            arrow.classList.toggle('tree-arrow-rotate-right')
        }
    }
    return (
        <Tree
            treeData={treeData}
            onNameClick={onNodeClick}
            openFolder={openFolder}
            skin={skin}
        />
    )
}

export default directory