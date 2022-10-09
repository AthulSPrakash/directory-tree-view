import React from 'react'
import TreeView from './treeView'
import '../styles/style'

interface TreeData {
    id: number | string,
    name: string,
    children: object[],
    props?: object,
    isOpen: boolean
}

interface Props {
    treeData: TreeData,
    onNodeClick?: any,
    skin?: string,
}

const app = ({ treeData, onNodeClick, skin }: Props) => {
    const openFolder = (folder: TreeData) => {
        const dir = document.getElementById(`${folder.id}+dir`)!
        const arrow = document.getElementById(`${folder.id}+arrow`)!
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
        <TreeView
            treeData={treeData}
            onNameClick={onNodeClick}
            openFolder={openFolder}
            skin={skin}
        />
    )
}

export default app