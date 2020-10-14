import React from 'react';
import {graphql} from 'gatsby';

import SEO from 'components/seo';
import Page from 'components/page';
import Content from 'components/content';
import Header from 'components/header';

import {Card, Button, Accordion} from 'react-bootstrap';

const meta = require('../../data/meta.json');

function getEventKey(section) {
  return String(section + 'toggle').toLowerCase();
}

function getContentSection(sections, name) {
  return sections.find(({node: loadedSection}) => {
    return loadedSection.frontmatter.title === name;
  });
}

export default function IndexPage({data}) {
  const profileSections = ['Bio', 'Resume', 'CV', 'Portfolio', 'Contact'];
  const {edges: sectionContents} = data.allMarkdownRemark;
  return (
    <Page>
      <SEO title='Home' />
      <Header />
      <Accordion className='dark-accordion' style={{maxWidth: '100%'}}>
        <Card bg='dark' text='light'>
          <Card.Header>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-start',
                overflowX: 'scroll',
                overflowY: 'hidden'
              }}>
              {profileSections.map(section => {
                const contentSection = getContentSection(
                  sectionContents,
                  section
                );
                const key = getEventKey(section);
                if (!contentSection) return null;
                return (
                  <React.Fragment key={key}>
                    <div style={{margin: '3px'}}>
                      <Accordion.Toggle
                        as={Button}
                        size='lg'
                        variant='dark'
                        eventKey={key}>
                        {section}
                      </Accordion.Toggle>
                    </div>
                  </React.Fragment>
                );
              })}
            </div>
          </Card.Header>
          {profileSections.map(section => {
            const contentSection = getContentSection(sectionContents, section);
            const key = getEventKey(section);
            return (
              <Accordion.Collapse key={key} eventKey={key}>
                <Content
                  dangerouslySetInnerHTML={{
                    __html: contentSection ? contentSection.node.html : null
                  }}
                />
              </Accordion.Collapse>
            );
          })}
        </Card>
      </Accordion>
      <br />
      <footer>
        <h6>
          Copyright &copy; {new Date().getFullYear()}
          {', '}
          {meta.name}
        </h6>
        <h6>
          Website template made by <a href='https://valisoft.net'>VALISOFT</a>
        </h6>
      </footer>
    </Page>
  );
}

export const pageQuery = graphql`
  {
    allMarkdownRemark {
      edges {
        node {
          html
          frontmatter {
            title
          }
        }
      }
    }
  }
`;
