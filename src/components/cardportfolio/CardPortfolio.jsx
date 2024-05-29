import styles from './style.module.css'
import { Card, Statistic, List, Typography, Tag } from 'antd'
import { ArrowUpOutlined } from '@ant-design/icons'
import {useContext, useEffect} from "react";
import PortfolioContext from "../../сontext/portfolio-context.jsx";

const cardStyle = {
    marginBottom: '1rem',
    marginRight: '1rem'
}

function CardPortfolio() {

    const { portfolios } = useContext(PortfolioContext)

    console.log(portfolios)

    return (
        <div className={styles.box_cards}>
            {portfolios.map((portfolio) => (

         <Card key={1} style={cardStyle}>
                   <Statistic
                       title={portfolio.name}
                       value={portfolio.balance}
                       precision={2}
                       valueStyle={{ color: '#3f8600'  }}
                       prefix={<ArrowUpOutlined /> }
                       suffix="$"
                   />
                   <List
                       size="small"
                       dataSource={[
                           {
                               title: 'Total Profit',
                               value: 100,
                               withTag: true,
                           },
                           { title: 'Asset Amount', value: 111, isPlain: true },
                           // { title: 'Difference', value: asset.growPercent },
                       ]}
                       renderItem={(item) => (
                           <List.Item>
                               <span>{item.title}</span>
                               <span>
                  {item.withTag && (
                      <Tag color={'green'}>
                          {100}%
                      </Tag>
                  )}
                                   {item.isPlain && item.value}
                                   {!item.isPlain && (
                                       <Typography.Text type={'success'}>
                                           {item.value.toFixed(2)}$
                                       </Typography.Text>
                                   )}
                </span>
                           </List.Item>
                       )}
                   />
               </Card>

            ))}
        </div>
    )
}

export default CardPortfolio

