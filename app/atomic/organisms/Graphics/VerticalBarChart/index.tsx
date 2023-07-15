import React, { useEffect } from 'react'

import useListProductions from '@app/features/productions/hooks/useListProductions'
import useListStorages from '@app/features/storage/hooks/useListStorages'
import { Flex } from '@chakra-ui/react'
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from 'chart.js'
import dynamic from 'next/dynamic'

const Plot = dynamic(() => import('react-plotly.js'), { ssr: false })
// import Plot from 'react-plotly.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
)
export const VerticalBarChart = () => {
  const { data: productionData } = useListProductions()
  const { data: storageData } = useListStorages()
  // console.log(storageData?.storages?.nodes)

  const options = {
    responsive: true,
    width: 200,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Relatórios de estoque',
      },
    },
  }

  const milho = []
  storageData?.storages?.nodes?.map((value) => {
    if (value?.inventories?.name === 'Milho') {
      {
        milho?.push({
          amount: 20,
        })
      }
    }
  })
  const soja = []
  storageData?.storages?.nodes?.map((value) => {
    if (value?.inventories?.name === 'Soja') {
      soja.push({
        amount: 30,
      })
    }
  })

  const color = []
  console.log(color)

  useEffect(() => {
    if (
      storageData?.storages?.nodes?.map(
        (v) => v?.inventories?.name === 'Milho',
      )
    ) {
      color.push(...color, '#efd711')
    }
    if (
      storageData?.storages?.nodes?.map(
        (v) => v?.inventories?.name === 'Soja',
      )
    ) {
      color.push(...color, '#eca847')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [color])

  const storageName = storageData?.storages?.nodes?.map(
    (v) => v?.name,
  )
  const storageAmount = storageData?.storages?.nodes?.map(
    (v) => v?.inventories?.amount,
  )

  return (
    <Flex flexDir="row" justifyContent="center">
      <Plot
        data={[
          {
            type: 'bar',
            x: storageName,
            y: storageAmount,
            marker: { color: color },
          },
        ]}
        layout={{
          width: 920,
          height: 440,
          title: 'Relatório Geral de Estoque',
        }}
      />
    </Flex>
  )
}
