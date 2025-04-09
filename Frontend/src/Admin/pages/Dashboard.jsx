import { Card, Row, Col, Statistic } from "antd";
import {
  TeamOutlined,
  TagsOutlined,
  MailOutlined,
  MessageOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import { useQueries } from "@tanstack/react-query";
import {
  fetchBuilders,
  fetchTypes,
  getContacts,
  getEnquiries,
  fetchProjects,
} from "../../services/api.js";

const Dashboard = () => {
  const [
    buildersQuery,
    typesQuery,
    contactsQuery,
    enquiriesQuery,
    projectsQuery,
  ] = useQueries({
    queries: [
      {
        queryKey: ["builders"],
        queryFn: fetchBuilders,
        select: (data) => data.length,
      },
      {
        queryKey: ["types"],
        queryFn: fetchTypes,
        select: (data) => data.length,
      },
      {
        queryKey: ["contacts"],
        queryFn: () => getContacts({ page: 1, limit: 1 }),
        select: (data) => data.total,
      },
      {
        queryKey: ["enquiries"],
        queryFn: () => getEnquiries({ page: 1, limit: 1 }),
        select: (data) => data.total,
      },
      {
        queryKey: ["projects"],
        queryFn: fetchProjects,
        select: (data) => data.length,
      },
    ],
  });

  const renderStatValue = (query) => {
    if (query.isLoading) return "Loading...";
    if (query.isError) return "Error";
    return query.data || 0;
  };

  return (
    <div>
      <h1 className="mb-6 text-2xl font-bold">Dashboard</h1>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12} lg={4}>
          <Card>
            <Statistic
              title="Total Builders"
              value={renderStatValue(buildersQuery)}
              prefix={<TeamOutlined />}
              valueStyle={{ color: "#3f8600" }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={4}>
          <Card>
            <Statistic
              title="Property Types"
              value={renderStatValue(typesQuery)}
              prefix={<TagsOutlined />}
              valueStyle={{ color: "#1677ff" }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={4}>
          <Card>
            <Statistic
              title="Contacts"
              value={renderStatValue(contactsQuery)}
              prefix={<MailOutlined />}
              valueStyle={{ color: "#cf1322" }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={4}>
          <Card>
            <Statistic
              title="Enquiries"
              value={renderStatValue(enquiriesQuery)}
              prefix={<MessageOutlined />}
              valueStyle={{ color: "#722ed1" }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={4}>
          <Card>
            <Statistic
              title="Projects"
              value={renderStatValue(projectsQuery)}
              prefix={<HomeOutlined />}
              valueStyle={{ color: "#fa8c16" }}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
