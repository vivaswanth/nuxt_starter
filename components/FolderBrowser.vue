<template>
  <div class="flex gap-4">
    <!-- Sidebar -->
    <aside class="w-64 p-4 border rounded bg-muted/20">
      <h2 class="text-lg font-semibold mb-3">Docs Sections</h2>
      <ul>
        <li v-for="folder in folders" :key="folder">
          <button
            @click="selected = folder"
            class="block w-full text-left py-1 px-2 rounded hover:bg-muted text-primary"
            :class="{ 'bg-muted font-medium': selected === folder }">
            {{ folder }}
          </button>
        </li>
      </ul>
    </aside>

    <!-- Subfolder Cards -->
    <div class="flex-1 p-4">
      <h3 v-if="selected" class="text-xl font-bold capitalize mb-4">
        {{ selected }} Subfolders
      </h3>
      <p v-else class="text-muted-foreground">Select a section to view its subfolders.</p>

      <div v-if="selected" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card
          v-for="doc in subfolderMap[selected]"
          :key="doc._path"
          class="hover:shadow transition">
          <CardHeader>
            <CardTitle>{{ doc.title || doc._path.split('/')[3] }}</CardTitle>
          </CardHeader>
          <CardContent>
            <p class="text-muted-foreground text-sm">{{ doc.description }}</p>
            <NuxtLink :to="doc._path" class="inline-block mt-2 text-blue-500 hover:underline">
              View
            </NuxtLink>
          </CardContent>
        </Card>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

const { data } = await useAsyncData('docs-content', () =>
  queryContent('docs').only(['_path', 'title', 'description']).find()
)
console.log('📁 Loaded content:', data.value.map(i => i._path))

const folders = [...new Set(data.value.map(i => i._path.split('/')[2]).filter(Boolean))]

const subfolderMap = computed(() => {
  const map = {}
  for (const folder of folders) {
    map[folder] = data.value.filter(i =>
      i._path.startsWith(`/docs/${folder}/`) &&
      i._path.split('/').length === 4
    )
  }
  return map
})

const selected = ref(null)
</script>
