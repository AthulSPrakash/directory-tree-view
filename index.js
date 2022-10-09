import Tree from './components/directory-tree-view'
import './components/style.css'

const directory = ({ treeData, onNodeClick, skin }) => {
    const openFolder = folder => {
        const dir = document.getElementById(`${folder.id}+dir`)
        const arrow = document.getElementById(`${folder.id}+arrow`)
        if (folder.isOpen) { // Close
            dir.classList.remove('tree-dir-open-folder')
            arrow.classList.remove('tree-arrow-rotate-right')
            dir.classList.add('tree-dir-close-folder')
            arrow.classList.add('tree-arrow-rotate-left')
        } else {    // Open
            dir.classList.remove('tree-dir-close-folder')
            arrow.classList.remove('tree-arrow-rotate-left')
            dir.classList.add('tree-dir-open-folder')
            arrow.classList.add('tree-arrow-rotate-right')
        }
        folder.isOpen = !folder.isOpen
        //console.log(folder)
        //console.log(treeData)
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