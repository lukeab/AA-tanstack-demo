// src/routes/index.tsx

import { createFileRoute, useRouter } from '@tanstack/react-router'
import { FileInput, Button, Group, Text } from '@mantine/core'
import { Dropzone, IMAGE_MIME_TYPE } from '@mantine/dropzone';
import { useFileStore } from '@/stores/useFileStore'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  const router = useRouter()
  const { file, setFile } = useFileStore()

  const handleViewFile = () => {
    router.navigate({ to: '/viewfile' })
  }

  return (
    <div>
      <h1>File Upload</h1>
      <Dropzone onDrop={(files) => setFile(files[0])}>
        <Group justify="center" gap="xl" mih={220} style={{ pointerEvents: 'none' }}>
          {file ? (
            <Text>Selected file: {file.name}</Text>
          ) : (
            <>
              <Dropzone.Accept>
                <Text>Drop files here</Text>
              </Dropzone.Accept>
              <Dropzone.Reject>
                <Text>File type not supported</Text>
              </Dropzone.Reject>
              <Dropzone.Idle>
                <Text>Drag & drop a file here, or click to select a file</Text>
              </Dropzone.Idle>
            </>
          )}
        </Group>
      </Dropzone>
      <Group mt="md">
        <Button onClick={handleViewFile} disabled={!file}>
          View File
        </Button>
        <Button onClick={() => setFile(null)} disabled={!file} variant="outline">
          Clear
        </Button>
      </Group>
    </div>
  )
}