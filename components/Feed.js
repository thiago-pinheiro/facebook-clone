import React from 'react'
import Avatar from './Avatar'
import styled from 'styled-components/native'
import { Entypo, AntDesign, MaterialCommunityIcons } from "@expo/vector-icons"
import { View } from 'react-native'

const Container = styled.View`
    flex: 1;

`
const Header = styled.View`
    height: 50px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 6px;
    padding: 0 11px;

`
const Row = styled.View`
    align-items: center;
    flex-direction: row;

`
const User = styled.Text`
    font-size: 15px;
    font-weight: bold;
    color: #222121;
`
const Time = styled.Text`
    font-size: 12px;
    color: #747476;
`
const Post = styled.Text`
    font-size: 13px;
    color: #222121;
    line-height: 16px;
    padding: 0 12px;
`
const Foto = styled.Image`
    margin-top: 9px;
    width: 100%;
    height: 300px;
`
const Footer = styled.View`
    padding: 0 11px;
`
const FooterCount = styled.View`
    flex-direction: row;
    justify-content: space-between;
    padding: 9px 0;
`
const IconCount = styled.View`
    background: #1878f3;
    height: 20px;
    width: 20px;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    margin-right: 6px;
`
const TextCount = styled.Text`
    font-size: 11px;
    color: #424040;
`
const Separator = styled.View`
    width: 100%;
    height: 1px;
    background: #f9f9f9;
`
const FooterMenu = styled.View`
    flex-direction: row;
    justify-content: space-between;
    padding: 9px 0;
`
const Button = styled.TouchableOpacity`
    flex-direction: row;
`
const Icon = styled.View`
    margin-right: 6px;
`
const Text = styled.Text`
    font-size: 12px;
    color: #424040;
`
const BottonDivider = styled.View`
    width: 100%;
    height: 9px;
    background: #f0f2f5;
`

const Feed = () => {
  return (
      <>
         <Container>
            <Header>
                <Row>
                    <Avatar 
                        source={require('../assets/user1.jpg')}
                    />
                    <View style={{paddingLeft: 10}}>
                        <User>Thiago Pinheiro</User>
                        <Row>
                            <Time>18m</Time>
                            <Entypo
                                name="dot-single"
                                size={14}
                                color="#747476"
                            />
                            <Entypo
                                name="globe"
                                size={12}
                                color="747476"
                            />
                        </Row>
                    </View>
                </Row>
                <Entypo
                    name="dots-three-horizontal"
                    size={15}
                    color="#222121"
                />
            </Header>

            <Post>
            "Por estradas extensas
            caminho em busca da felicidade,
            Paisagens de farta beleza
            me cercam pela passagem.
            Os pássaros contemplam
            com sinfonia
            a divina arte da natureza,
            flora e fauna se alegram
            e as vidas se integram
            numa constância feliz." |
                           Sueli Matochi
            </Post>
            <Foto source={require('../assets/post1.jpg')}/>

            <Footer>
                <FooterCount>
                    <Row>
                        <IconCount>
                            <AntDesign 
                                name="like1"
                                size={12}
                                color="#ffffff"
                            />
                        </IconCount>
                        <TextCount>524 cutidas</TextCount>
                    </Row>
                    <TextCount>200 comentários</TextCount>
                </FooterCount>

                <Separator/>

              <FooterMenu>
                  <Button>
                      <Icon>
                          <AntDesign 
                            name="like2"
                            size={20}
                            color="#424040"
                            />
                      </Icon>
                      <Text>Curtir</Text>
                  </Button>

                  <Button>
                      <Icon>
                          <MaterialCommunityIcons
                            name="comment-outline"
                            size={20}
                            color="#424040"
                            />
                      </Icon>
                      <Text>Comentar</Text>
                  </Button>

                  <Button>
                      <Icon>
                          <MaterialCommunityIcons 
                            name="share-outline"
                            size={20}
                            color="#424040"
                            />
                      </Icon>
                      <Text>Compartilhar</Text>
                  </Button>
              </FooterMenu>  
            </Footer>

            <BottonDivider/>


        </Container>

        <Container>
            <Header>
                <Row>
                    <Avatar 
                        source={require('../assets/user2.jpg')}
                    />
                    <View style={{paddingLeft: 10}}>
                        <User>Chris Castro</User>
                        <Row>
                            <Time>25m</Time>
                            <Entypo
                                name="dot-single"
                                size={14}
                                color="#747476"
                            />
                            <Entypo
                                name="globe"
                                size={12}
                                color="747476"
                            />
                        </Row>
                    </View>
                </Row>
                <Entypo
                    name="dots-three-horizontal"
                    size={15}
                    color="#222121"
                />
            </Header>

            <Post>
            A lua não só é bela e luminosa, como também inspiradora e cheia de mistérios. 
            </Post>

            <Foto source={require('../assets/post3.jpg')}/>

            <Footer>
                <FooterCount>
                    <Row>
                        <IconCount>
                            <AntDesign 
                                name="like1"
                                size={12}
                                color="#ffffff"
                            />
                        </IconCount>
                        <TextCount>603 cutidas</TextCount>
                    </Row>
                    <TextCount>255 comentários</TextCount>
                </FooterCount>

                <Separator/>

              <FooterMenu>
                  <Button>
                      <Icon>
                          <AntDesign 
                            name="like2"
                            size={20}
                            color="#424040"
                            />
                      </Icon>
                      <Text>Curtir</Text>
                  </Button>

                  <Button>
                      <Icon>
                          <MaterialCommunityIcons
                            name="comment-outline"
                            size={20}
                            color="#424040"
                            />
                      </Icon>
                      <Text>Comentar</Text>
                  </Button>

                  <Button>
                      <Icon>
                          <MaterialCommunityIcons 
                            name="share-outline"
                            size={20}
                            color="#424040"
                            />
                      </Icon>
                      <Text>Compartilhar</Text>
                  </Button>
              </FooterMenu>  
            </Footer>

            <BottonDivider/>


        </Container>

        <Container>
            <Header>
                <Row>
                    <Avatar 
                        source={require('../assets/user3.jpg')}
                    />
                    <View style={{paddingLeft: 10}}>
                        <User>Rafa Studart</User>
                        <Row>
                            <Time>25m</Time>
                            <Entypo
                                name="dot-single"
                                size={14}
                                color="#747476"
                            />
                            <Entypo
                                name="globe"
                                size={12}
                                color="747476"
                            />
                        </Row>
                    </View>
                </Row>
                <Entypo
                    name="dots-three-horizontal"
                    size={15}
                    color="#222121"
                />
            </Header>

            <Post>            
                Qualquer caminho que me leve ao mar, é o meu caminho. A praia é a minha praia. 
                Bom dia pra quem quer largar tudo e ir pra praia! E hoje eu caminhei a praia inteira... 
                com os pés na areia, coração em alto mar. 
            </Post>

            <Foto source={require('../assets/post5.jpg')}/>

            <Footer>
                <FooterCount>
                    <Row>
                        <IconCount>
                            <AntDesign 
                                name="like1"
                                size={12}
                                color="#ffffff"
                            />
                        </IconCount>
                        <TextCount>400 cutidas</TextCount>
                    </Row>
                    <TextCount>156 comentários</TextCount>
                </FooterCount>

                <Separator/>

              <FooterMenu>
                  <Button>
                      <Icon>
                          <AntDesign 
                            name="like2"
                            size={20}
                            color="#424040"
                            />
                      </Icon>
                      <Text>Curtir</Text>
                  </Button>

                  <Button>
                      <Icon>
                          <MaterialCommunityIcons
                            name="comment-outline"
                            size={20}
                            color="#424040"
                            />
                      </Icon>
                      <Text>Comentar</Text>
                  </Button>

                  <Button>
                      <Icon>
                          <MaterialCommunityIcons 
                            name="share-outline"
                            size={20}
                            color="#424040"
                            />
                      </Icon>
                      <Text>Compartilhar</Text>
                  </Button>
              </FooterMenu>  
            </Footer>

            <BottonDivider/>


        </Container>

        


        

      </>

  )

}

export default Feed