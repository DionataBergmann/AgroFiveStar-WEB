import React, { useState } from 'react'

import { getYearFormat } from '@app/common/utils/getYearFormat'
import useListFields from '@app/features/fields/hooks/useListField'
import useListProductions from '@app/features/productions/hooks/useListProductions'
import {
  Flex,
  Radio,
  RadioGroup,
  Select as CSelect,
  Select,
  Stack,
} from '@chakra-ui/react'
import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js'
import { Line } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
)

export const LineChart = () => {
  const [fieldId, setFieldId] = useState<any>()
  const { data: productionData, refetch } = useListProductions()
  const { data: fieldData } = useListFields()
  const [listAsTon, setListAsTon] = useState(true)
  const [kilograms, setKilograms] = useState<any>(50)

  refetch({
    filter: {
      fields: {
        id: { eq: fieldId },
      },
    },
  })

  const options = {
    responsive: true,
    interaction: {
      mode: 'index' as const,
      intersect: false,
    },
    stacked: false,
    plugins: {
      title: {
        display: true,
        text: `Relatório anual em ${listAsTon ? 'Toneladas' : `Sacas de ${kilograms} Kg`
          }`,
      },
    },
    scales: {
      y: {
        type: 'linear' as const,
        display: true,
        position: 'left' as const,
      },
      y1: {
        type: 'linear' as const,
        display: true,
        position: 'right' as const,
      },
    },
  }

  const labels = [
    getYearFormat(
      productionData?.productions?.nodes?.[0]?.createdAt,
    ) - 3,
    getYearFormat(
      productionData?.productions?.nodes?.[0]?.createdAt,
    ) - 2,
    getYearFormat(
      productionData?.productions?.nodes?.[0]?.createdAt,
    ) - 1,
    getYearFormat(productionData?.productions?.nodes?.[0]?.createdAt),
  ]

  const milho = []
  productionData?.productions?.nodes?.map((value) => {
    if (value?.name === 'Milho') {
      {
        milho?.push({
          amount: listAsTon
            ? value?.amount
            : (value?.amount / kilograms)?.toFixed(1),
          createdAt: value?.createdAt,
        })
      }
    }
  })
  const soja = []
  productionData?.productions?.nodes?.map((value) => {
    if (value?.name === 'Soja') {
      soja.push({
        amount: listAsTon
          ? value?.amount
          : (value?.amount / kilograms)?.toFixed(1),
        createdAt: value?.createdAt,
      })
    }
  })

  const data = {
    labels,
    datasets: [
      {
        label: 'Milho',
        data: milho
          ?.reverse()
          ?.map((value) =>
            labels?.map(
              (year) => getYearFormat(value?.createdAt) === year,
            )
              ? value?.amount
              : 0,
          ),
        borderColor: '#efd72c80',
        backgroundColor: '#efd711',
        yAxisID: 'y',
      },
      {
        label: 'Soja',
        data: soja
          ?.reverse()
          ?.map((value) =>
            labels?.map(
              (year) => getYearFormat(value?.createdAt) === year,
            )
              ? value?.amount
              : 0,
          ),
        borderColor: '#eca84780',
        backgroundColor: '#eca847',
        yAxisID: 'y1',
      },
    ],
  }
  return (
    <Flex w="100%" flexDir="column">
      <RadioGroup defaultValue="true">
        <Stack direction="row">
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
          <Select
            placeholder="Selecione um campo"
            w={200}
            h={8}
            left={635}
            onChange={(v) => setFieldId(v?.target?.value)}
          >
            {fieldData?.fields?.nodes?.map((value) => (
              <option value={value?.id}>{value?.name}</option>
            ))}
          </Select>
        </Stack>
      </RadioGroup>

      <Line
        style={{
          maxHeight: 300,
          maxWidth: '100%',
        }}
        options={options}
        data={data}
      />
    </Flex>
  )
}
