import { createFileRoute } from '@tanstack/react-router'
import { useFileStore } from '@/stores/useFileStore'
import { useEffect, useState } from 'react'
import { Paper, Text, Code } from '@mantine/core'

export const Route = createFileRoute('/viewfile')({
  component: ViewFile,
})

function ViewFile() {
  const { file } = useFileStore()
  const [fileContent, setFileContent] = useState<string | null>(null)

  useEffect(() => {
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setFileContent(e.target?.result as string)
      }
      reader.readAsText(file)
    }
  }, [file])

  if (!file) {
    return <div>No file selected</div>
  }

  return (
    <Paper shadow="xs" p="md">
      <Text>
        <strong>Name:</strong> {file.name}
      </Text>
      <Text>
        <strong>Type:</strong> {file.type}
      </Text>
      <Text>
        <strong>Size:</strong> {file.size} bytes
      </Text>
      <Text mt="md">
        <strong>Content:</strong>
      </Text>
      <Code block>{fileContent}</Code>
    </Paper>
  )
}