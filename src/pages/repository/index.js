import React, { Component } from 'react';
import { AiOutlineLoading } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import api from '../../services/api';

import Container from '../../components/container';
import {
  Loading,
  Owner,
  IssueList,
  OpenButton,
  ClosedButton,
  AllButton,
} from './styles';

export default class Repository extends Component {
  state = {
    repository: {},
    issues: [],
    loading: true,
    all: false,
    open: true,
    closed: false,
  };

  async componentDidMount() {
    const { match } = this.props;

    const repoName = decodeURIComponent(match.params.repository);

    const [repository, issues] = await Promise.all([
      api.get(`/repos/${repoName}`),
      api.get(`/repos/${repoName}/issues`, {
        params: {
          state: 'open',
          per_page: 30,
        },
      }),
    ]);

    this.setState({
      repository: repository.data,
      issues: issues.data,
      loading: false,
    });
  }

  handleSubmit = async e => {
    try {
      this.setState({ error: false });

      const { match } = this.props;

      const repoName = decodeURIComponent(match.params.repository);

      const [repository, issues] = await Promise.all([
        api.get(`/repos/${repoName}`),
        api.get(`/repos/${repoName}/issues`, {
          params: {
            state: 'all',
            per_page: 30,
          },
        }),
      ]);

      this.setState({
        repository: repository.data,
        issues: issues.data,
        loading: false,
        all: true,
        open: false,
        closed: false,
      });
    } catch (error) {
      this.setState({ error: true });
      console.log('erro');
    }
  };

  handleSubmit1 = async e => {
    try {
      this.setState({ error: false });

      const { match } = this.props;

      const repoName = decodeURIComponent(match.params.repository);

      const [repository, issues] = await Promise.all([
        api.get(`/repos/${repoName}`),
        api.get(`/repos/${repoName}/issues`, {
          params: {
            state: 'open',
            per_page: 30,
          },
        }),
      ]);

      this.setState({
        repository: repository.data,
        issues: issues.data,
        loading: false,
        all: false,
        open: true,
        closed: false,
      });
    } catch (error) {
      this.setState({ error: true });
      console.log('erro');
    }
  };

  handleSubmit2 = async e => {
    try {
      this.setState({ error: false });

      const { match } = this.props;

      const repoName = decodeURIComponent(match.params.repository);

      const [repository, issues] = await Promise.all([
        api.get(`/repos/${repoName}`),
        api.get(`/repos/${repoName}/issues`, {
          params: {
            state: 'closed',
            per_page: 30,
          },
        }),
      ]);

      this.setState({
        repository: repository.data,
        issues: issues.data,
        loading: false,
        all: false,
        open: false,
        closed: true,
      });
    } catch (error) {
      this.setState({ error: true });
      console.log('erro');
    }
  };

  render() {
    const { repository, issues, loading, all, open, closed } = this.state;

    if (loading) {
      return (
        <Loading loading={loading}>
          {loading ? (
            <AiOutlineLoading color="#fff" size={80} />
          ) : (
            <AiOutlineLoading display="none" />
          )}
        </Loading>
      );
    }

    return (
      <>
        <Container>
          <Owner>
            <Link to="/">Voltar aos repositórios</Link>
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.loguin}
            />
            <h1>{repository.name}</h1>
            <p>{repository.description}</p>
            <div>
              <AllButton onClick={this.handleSubmit} all={all}>
                Todas
              </AllButton>
              <OpenButton onClick={this.handleSubmit1} open={open}>
                Abertas
              </OpenButton>
              <ClosedButton onClick={this.handleSubmit2} closed={closed}>
                Fechadas
              </ClosedButton>
            </div>
          </Owner>

          <IssueList>
            {issues.map(issue => (
              <li key={String(issue.id)}>
                <img src={issue.user.avatar_url} alt={issue.user.login} />
                <div>
                  <strong>
                    <a href={issue.html_url}>{issue.title}</a>
                    {issue.labels.map(label => (
                      <span key={String(label.id)}>{label.name}</span>
                    ))}
                  </strong>
                  <p>{issue.user.login}</p>
                </div>
              </li>
            ))}
          </IssueList>
        </Container>
      </>
    );
  }
}
