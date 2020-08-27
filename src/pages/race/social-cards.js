/* eslint-disable no-unused-vars */
import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Layout from '~components/layout'
import RaceSocialCards from '~components/social-cards/race/state'
import SocialCardsSelect from '~components/pages/race/social-cards/select'

export default ({ data }) => {
  const { contentfulSnippet } = useStaticQuery(graphql`
    query {
      contentfulSnippet(slug: { eq: "crdt-social-cards-preamble" }) {
        content {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  `)
  // todo use two return links once #1317 is merged
  // return to racial data dashboard and racial data tracker
  return (
    <Layout
      title="Social Cards"
      returnLink="/race"
      returnLinkTitle="Racial Data Tracker"
      path="/race/social-cards"
      centered
    >
      <div
        dangerouslySetInnerHTML={{
          __html: contentfulSnippet.content.childMarkdownRemark.html,
        }}
      />
      <h3>Create and share a social card</h3>
      <p>
        Select a state or territory to see the latest information about COVID-19
        cases and deaths by race and ethnicity. These charts are updated twice a
        week.
      </p>
      <SocialCardsSelect />
      <RaceSocialCards />
    </Layout>
  )
}