import React, { useEffect, useState } from 'react'

import useListFields from '@app/features/fields/hooks/useListField'
import useListStorages from '@app/features/storage/hooks/useListStorages'
import {
  Flex,
  Radio,
  RadioGroup,
  Select as CSelect,
  Stack,
} from '@chakra-ui/react'
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
  const { data: storageData } = useListStorages()
  const { data: fieldData } = useListFields()
  const [listAsTon, setListAsTon] = useState(true)
  const [kilograms, setKilograms] = useState<any>(50)

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
  const storageAmount = storageData?.storages?.nodes?.map((v) =>
    listAsTon
      ? v?.inventories?.amount
      : (v?.inventories?.amount / kilograms)?.toFixed(1),
  )

  return (
    <Flex flexDir="column" justifyContent="center">
      <RadioGroup defaultValue="true">
        <Stack direction="row" mt={10}>
          <Radio
            value="true"
            defaultChecked={true}
            colorScheme="green"
            size="sm"
            onChange={() => setListAsTon(true)}
          >
            Em toneladas
          </Radio>
          <Radio
            value="false"
            colorScheme="green"
            pl={10}
            size="sm"
            onChange={() => setListAsTon(false)}
          >
            Em sacas de
          </Radio>
          <CSelect
            w="86px"
            size="sm"
            onChange={(value) => setKilograms(value?.target?.value)}
          >
            <option value="50">50 Kg</option>
            <option value="60">60 Kg</option>
          </CSelect>
        </Stack>
      </RadioGroup>
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
    </Flex>
  )
}
