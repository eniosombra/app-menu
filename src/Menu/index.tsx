import { useState } from 'react'
import TreeView from '@mui/lab/TreeView'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import TreeItem from '@mui/lab/TreeItem'

export default function Menu() {
  const [expanded, setExpanded] = useState<string[]>([])
  const handleSelect = (event: any, accountId: string) => {
    setExpanded(['1', accountId])
  }

  return (
    <TreeView
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
      onNodeSelect={handleSelect}
      expanded={expanded}
    >
      <TreeItem nodeId="1" label="Applications">
        <TreeItem nodeId="2" label="Menu 1">
          <TreeItem nodeId="2.1" label="Sub 1.1" />
          <TreeItem nodeId="2.2" label="Sub 1.2" />
        </TreeItem>

        <TreeItem nodeId="3" label="Menu 2">
          <TreeItem nodeId="4" label="Sub 2.1" />
          <TreeItem nodeId="5" label="Sub 2.2" />
          <TreeItem nodeId="6" label="Sub 2.3" />
        </TreeItem>
        <TreeItem nodeId="7" label="Menu 3">
          <TreeItem nodeId="8" label="Sub 3.1" />
          <TreeItem nodeId="9" label="Sub 3.2" />
        </TreeItem>
      </TreeItem>
    </TreeView>
  )
}
