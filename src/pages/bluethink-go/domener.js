import React from 'react';
import Layout from '../../components/Layout';
import Title from '../../components/Title';
import DomainTable from '../../components/DomainTable';
import domains from './domener.json';
import { ButtonBack } from '../../components/Button';

export const DomainsList = () => {
  return (
    <>
      <Layout>
        <section id="domener" className="section has-dark-background">
          <div className="container">
            <ButtonBack
              className="is-transparent"
              text="Tilbake"
              link="/bluethink-go/meld-interesse"
            />
            <div className="columns">
              <div className="column is-8 is-offset-2">
                <Title
                  position="center"
                  title="BlueThink™ GO domener"
                  description="I oversikten over de registrerte domenene kan du se hvilke som er tilgjengelig, aktiv og opptatt. SEALAB har registrert domener for de aller fleste sjøbaserte oppdrettsanlegg i Norge med tillatelse til å drive oppdrett av laks eller ørret. "
                />
                <DomainTable domains={domains} />
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default DomainsList;
