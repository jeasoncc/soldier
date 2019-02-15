<template>
  <div>
    <v-card-text class="py-0">
      <v-timeline align-top dense>
        <v-timeline-item color="pink">
          <v-layout pt-3>
            <v-flex xs3>
              <strong>士兵</strong>
            </v-flex>
            <!-- <v-flex>
              <strong>New Icon</strong>
              <div class="caption">Mobile App</div>
            </v-flex> -->
            <v-flex>
              <strong></strong>
              <!-- <div class="caption mb-2">Hangouts</div> -->
              <v-avatar>
                <v-img
                  src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairFrida&accessoriesType=Kurt&hairColor=Red&facialHairType=BeardLight&facialHairColor=BrownDark&clotheType=GraphicShirt&clotheColor=Gray01&graphicType=Skull&eyeType=Wink&eyebrowType=RaisedExcitedNatural&mouthType=Disbelief&skinColor=Brown"
                ></v-img>
              </v-avatar>
              <v-avatar>
                <v-img
                  src="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairFrizzle&accessoriesType=Prescription02&hairColor=Black&facialHairType=MoustacheMagnum&facialHairColor=BrownDark&clotheType=BlazerSweater&clotheColor=Black&eyeType=Default&eyebrowType=FlatNatural&mouthType=Default&skinColor=Tanned"
                ></v-img>
              </v-avatar>
            </v-flex>
          </v-layout>
        </v-timeline-item>

        <v-timeline-item color="pink" small>
          <v-layout pt-3>
            <v-flex xs3>
              <strong>二等兵</strong>
            </v-flex>
            <v-flex>
              <strong>荣誉点</strong>
              <div class="caption">50</div>
            </v-flex>
          </v-layout>
        </v-timeline-item>

        <v-timeline-item color="pink" small>
          <v-layout pt-3>
            <v-flex xs3>
              <strong>一等兵</strong>
            </v-flex>
            <v-flex>
              <strong>荣誉点</strong>
              <div class="caption">100</div>
            </v-flex>
          </v-layout>
        </v-timeline-item>

        <v-timeline-item color="teal">
          <v-layout pt-3>
            <v-flex xs3>
              <strong>士官</strong>
            </v-flex>
            <!-- <v-flex>
              <strong>New Icon</strong>
              <div class="caption">Mobile App</div>
            </v-flex> -->
            <v-flex>
              <strong></strong>
              <!-- <div class="caption mb-2">Hangouts</div> -->
              <v-avatar>
                <v-img
                  src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairFrida&accessoriesType=Kurt&hairColor=Red&facialHairType=BeardLight&facialHairColor=BrownDark&clotheType=GraphicShirt&clotheColor=Gray01&graphicType=Skull&eyeType=Wink&eyebrowType=RaisedExcitedNatural&mouthType=Disbelief&skinColor=Brown"
                ></v-img>
              </v-avatar>
              <v-avatar>
                <v-img
                  src="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairFrizzle&accessoriesType=Prescription02&hairColor=Black&facialHairType=MoustacheMagnum&facialHairColor=BrownDark&clotheType=BlazerSweater&clotheColor=Black&eyeType=Default&eyebrowType=FlatNatural&mouthType=Default&skinColor=Tanned"
                ></v-img>
              </v-avatar>
              <v-avatar>
                <v-img
                  src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairMiaWallace&accessoriesType=Sunglasses&hairColor=BlondeGolden&facialHairType=Blank&clotheType=BlazerSweater&eyeType=Surprised&eyebrowType=RaisedExcited&mouthType=Smile&skinColor=Pale"
                ></v-img>
              </v-avatar>
            </v-flex>
          </v-layout>
        </v-timeline-item>

        <v-timeline-item color="teal lighten-3" small>
          <v-layout pt-3>
            <v-flex xs3>
              <strong>下士</strong>
            </v-flex>
            <v-flex>
              <strong>荣誉点</strong>
              <div class="caption">200</div>
            </v-flex>
          </v-layout>
        </v-timeline-item>

        <v-timeline-item color="teal lighten-3" small>
          <v-layout pt-3>
            <v-flex xs3>
              <strong>中士</strong>
            </v-flex>
            <v-flex>
              <strong>荣誉点</strong>
              <div class="caption">500</div>
            </v-flex>
          </v-layout>
        </v-timeline-item>

        <v-timeline-item color="teal lighten-3" small>
          <v-layout pt-3>
            <v-flex xs3>
              <strong>上士</strong>
            </v-flex>
            <v-flex>
              <strong>荣誉点</strong>
              <div class="caption">1000</div>
            </v-flex>
          </v-layout>
        </v-timeline-item>

        <v-timeline-item color="blue">
          <v-layout pt-3>
            <v-flex xs3>
              <strong>尉官</strong>
            </v-flex>
            <v-flex>
              <strong></strong>
              <v-avatar>
                <v-img
                  src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairFrida&accessoriesType=Kurt&hairColor=Red&facialHairType=BeardLight&facialHairColor=BrownDark&clotheType=GraphicShirt&clotheColor=Gray01&graphicType=Skull&eyeType=Wink&eyebrowType=RaisedExcitedNatural&mouthType=Disbelief&skinColor=Brown"
                ></v-img>
              </v-avatar>
              <v-avatar>
                <v-img
                  src="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairFrizzle&accessoriesType=Prescription02&hairColor=Black&facialHairType=MoustacheMagnum&facialHairColor=BrownDark&clotheType=BlazerSweater&clotheColor=Black&eyeType=Default&eyebrowType=FlatNatural&mouthType=Default&skinColor=Tanned"
                ></v-img>
              </v-avatar>
              <v-avatar>
                <v-img
                  src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairMiaWallace&accessoriesType=Sunglasses&hairColor=BlondeGolden&facialHairType=Blank&clotheType=BlazerSweater&eyeType=Surprised&eyebrowType=RaisedExcited&mouthType=Smile&skinColor=Pale"
                ></v-img>
              </v-avatar>
            </v-flex>
          </v-layout>
        </v-timeline-item>

        <v-timeline-item color="blue lighten-3" small>
          <v-layout pt-3>
            <v-flex xs3>
              <strong>下尉</strong>
            </v-flex>
            <v-flex>
              <strong>荣誉点</strong>
              <div class="caption">3000</div>
            </v-flex>
          </v-layout>
        </v-timeline-item>

        <v-timeline-item color="blue lighten-3" small>
          <v-layout pt-3>
            <v-flex xs3>
              <strong>中尉</strong>
            </v-flex>
            <v-flex>
              <strong>荣誉点</strong>
              <div class="caption">5000</div>
            </v-flex>
          </v-layout>
        </v-timeline-item>

        <v-timeline-item color="blue lighten-3" small>
          <v-layout pt-3>
            <v-flex xs3>
              <strong>上尉</strong>
            </v-flex>
            <v-flex>
              <strong>荣誉点</strong>
              <div class="caption">10000</div>
            </v-flex>
          </v-layout>
        </v-timeline-item>

        <v-timeline-item color="indigo">
          <v-layout pt-3>
            <v-flex xs3>
              <strong>校官</strong>
            </v-flex>
            <v-flex>
              <strong></strong>
              <v-avatar>
                <v-img
                  src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairFrida&accessoriesType=Kurt&hairColor=Red&facialHairType=BeardLight&facialHairColor=BrownDark&clotheType=GraphicShirt&clotheColor=Gray01&graphicType=Skull&eyeType=Wink&eyebrowType=RaisedExcitedNatural&mouthType=Disbelief&skinColor=Brown"
                ></v-img>
              </v-avatar>
              <v-avatar>
                <v-img
                  src="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairFrizzle&accessoriesType=Prescription02&hairColor=Black&facialHairType=MoustacheMagnum&facialHairColor=BrownDark&clotheType=BlazerSweater&clotheColor=Black&eyeType=Default&eyebrowType=FlatNatural&mouthType=Default&skinColor=Tanned"
                ></v-img>
              </v-avatar>
              <v-avatar>
                <v-img
                  src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairMiaWallace&accessoriesType=Sunglasses&hairColor=BlondeGolden&facialHairType=Blank&clotheType=BlazerSweater&eyeType=Surprised&eyebrowType=RaisedExcited&mouthType=Smile&skinColor=Pale"
                ></v-img>
              </v-avatar>
            </v-flex>
          </v-layout>
        </v-timeline-item>

        <v-timeline-item color="indigo lighten-3" small>
          <v-layout pt-3>
            <v-flex xs3>
              <strong>下校</strong>
            </v-flex>
            <v-flex>
              <strong>荣誉点</strong>
              <div class="caption">30000</div>
            </v-flex>
          </v-layout>
        </v-timeline-item>

        <v-timeline-item color="indigo lighten-3" small>
          <v-layout pt-3>
            <v-flex xs3>
              <strong>中校</strong>
            </v-flex>
            <v-flex>
              <strong>荣誉点</strong>
              <div class="caption">50000</div>
            </v-flex>
          </v-layout>
        </v-timeline-item>

        <v-timeline-item color="indigo lighten-3" small>
          <v-layout pt-3>
            <v-flex xs3>
              <strong>上校</strong>
            </v-flex>
            <v-flex>
              <strong>荣誉点</strong>
              <div class="caption">100000</div>
            </v-flex>
          </v-layout>
        </v-timeline-item>

        <v-timeline-item color="green">
          <v-layout pt-3>
            <v-flex xs3>
              <strong>将官</strong>
            </v-flex>
            <v-flex>
              <strong></strong>
              <v-avatar>
                <v-img
                  src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairFrida&accessoriesType=Kurt&hairColor=Red&facialHairType=BeardLight&facialHairColor=BrownDark&clotheType=GraphicShirt&clotheColor=Gray01&graphicType=Skull&eyeType=Wink&eyebrowType=RaisedExcitedNatural&mouthType=Disbelief&skinColor=Brown"
                ></v-img>
              </v-avatar>
              <v-avatar>
                <v-img
                  src="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairFrizzle&accessoriesType=Prescription02&hairColor=Black&facialHairType=MoustacheMagnum&facialHairColor=BrownDark&clotheType=BlazerSweater&clotheColor=Black&eyeType=Default&eyebrowType=FlatNatural&mouthType=Default&skinColor=Tanned"
                ></v-img>
              </v-avatar>
              <v-avatar>
                <v-img
                  src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairMiaWallace&accessoriesType=Sunglasses&hairColor=BlondeGolden&facialHairType=Blank&clotheType=BlazerSweater&eyeType=Surprised&eyebrowType=RaisedExcited&mouthType=Smile&skinColor=Pale"
                ></v-img>
              </v-avatar>
            </v-flex>
          </v-layout>
        </v-timeline-item>

        <v-timeline-item color="green lighten-3" small>
          <v-layout pt-3>
            <v-flex xs3>
              <strong>少将</strong>
            </v-flex>
            <v-flex>
              <strong>荣誉点</strong>
              <div class="caption">110000</div>
            </v-flex>
          </v-layout>
        </v-timeline-item>

        <v-timeline-item color="green lighten-3" small>
          <v-layout pt-3>
            <v-flex xs3>
              <strong>中将</strong>
            </v-flex>
            <v-flex>
              <strong>荣誉点</strong>
              <div class="caption">200000</div>
            </v-flex>
          </v-layout>
        </v-timeline-item>

        <v-timeline-item color="green lighten-3" small>
          <v-layout pt-3>
            <v-flex xs3>
              <strong>上将</strong>
            </v-flex>
            <v-flex>
              <strong>荣誉点</strong>
              <div class="caption">300000</div>
            </v-flex>
          </v-layout>
        </v-timeline-item>

        <v-timeline-item color="teal">
          <v-layout pt-3>
            <v-flex xs3>
              <strong>大将军</strong>
            </v-flex>
            <v-flex>
              <v-flex>
                <strong>终身成就</strong>
                <div class="caption">588900</div>
              </v-flex>
              <strong></strong>
              <v-avatar>
                <v-img
                  src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairFrida&accessoriesType=Kurt&hairColor=Red&facialHairType=BeardLight&facialHairColor=BrownDark&clotheType=GraphicShirt&clotheColor=Gray01&graphicType=Skull&eyeType=Wink&eyebrowType=RaisedExcitedNatural&mouthType=Disbelief&skinColor=Brown"
                ></v-img>
              </v-avatar>
            </v-flex>
          </v-layout>
        </v-timeline-item>
      </v-timeline>
    </v-card-text>
  </div>
</template>
