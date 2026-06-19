import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
const seeds = [
  ['#uvprinting','EN','Global','UV'],['#dtfprinting','EN','Global','DTF'],['#laserengraving','EN','Global','Laser'],['#custompackaging','EN','Global','Packaging'],['#retaildisplay','EN','Global','Retail'],['#signage','EN','Global','Signage'],
  ['#impresionuv','ES','Spain','UV'],['#impresiondtf','ES','Spain','DTF'],['#grabadolaser','ES','Spain','Laser'],['#packagingpersonalizado','ES','Spain','Packaging'],['#rotulacion','ES','Spain','Signage'],
  ['#uvdruck','DE','DACH','UV'],['#dtfdruck','DE','DACH','DTF'],['#lasergravur','DE','DACH','Laser'],['#verpackung','DE','DACH','Packaging'],
  ['#impressionuv','FR','France','UV'],['#impressiondtf','FR','France','DTF'],['#gravurelaser','FR','France','Laser'],['#plv','FR','France','Retail'],
  ['#uvprinten','NL','Benelux','UV'],['#dtfprinten','NL','Benelux','DTF'],['#lasergraveren','NL','Benelux','Laser'],['#signing','NL','Benelux','Signage']
] as const;
async function main() { for (const [term, language, market, sector] of seeds) { await prisma.keyword.upsert({ where: { term_language_market_sector: { term, language, market, sector } }, update: {}, create: { term, type: 'hashtag', language, market, sector, intent: 'trend', priority: 'medium', frequency: 'manual', status: 'active' } }); } }
main().finally(async()=>prisma.$disconnect());
