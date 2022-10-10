import React from 'react'
import TreeView from './treeView'
import './styles/style.css'

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

const DirectoryTree = ({ treeData, onNodeClick, skin }: Props) => {

    const openFolder = (event: React.ChangeEvent<HTMLInputElement>, folder: TreeData) => {
        const dir = document.getElementById(`${folder.id}+dir`)!
        const arrow = document.getElementById(`${folder.id}+arrow`)!
        const folderIcon = event.target.parentElement?.lastChild?.firstChild?.firstChild as HTMLImageElement
        if (folder.isOpen) { // Close
            folderIcon.src = require(`./img/folder-${skin && skin==='solid' ? 'solid' : 'regular'}.svg`)
            dir.classList.remove('tree-dir-open-folder')
            arrow.classList.remove('tree-arrow-rotate-right')
            dir.classList.add('tree-dir-close-folder')
            arrow.classList.add('tree-arrow-rotate-left')
        } else {    // Open
            folderIcon.src = require(`./img/folder-open-${skin && skin==='solid' ? 'solid' : 'regular'}.svg`)
            dir.classList.remove('tree-dir-close-folder')
            arrow.classList.remove('tree-arrow-rotate-left')
            dir.classList.add('tree-dir-open-folder')
            arrow.classList.add('tree-arrow-rotate-right')
        }
        folder.isOpen = !folder.isOpen
    }
    console.log('directoryTree')
    const onNameClick = (event: React.ChangeEvent<HTMLInputElement>, data:object) => {
        onNodeClick({
            nodeData: data,
            nodeElement: event.target.lastChild as HTMLInputElement,
        })
    }

    return (
        <TreeView
            treeData={treeData}
            onNameClick={onNameClick}
            openFolder={openFolder}
            skin={skin}
        />
    )
}

export default DirectoryTree