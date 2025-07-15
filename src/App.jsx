import './App.css'
import { useState } from 'react'
import { Button } from './components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card'
import { Badge } from './components/ui/badge'
import { CheckCircle, Star, Users, BookOpen, Clock, Download } from 'lucide-react'
import tdahCap1 from './assets/tdah_cap1.png'
import tdahCap2 from './assets/tdah_cap2.png'
import tdahCap3 from './assets/tdah_cap3.png'
import tdahCap4 from './assets/tdah_cap4.png'
import tdahCap5 from './assets/tdah_cap5.png'

function App() {
  const [isLoading, setIsLoading] = useState(false)

  const handlePurchase = () => {
    setIsLoading(true)
    // Simular processo de compra
    setTimeout(() => {
      setIsLoading(false)
      alert('Obrigado pela compra! Você receberá o e-book por email em instantes.')
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-gray-800">TDAH: Técnicas Práticas</h1>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
                Novo Lançamento
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                TDAH: Técnicas Práticas para o Dia a Dia
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Descubra estratégias simples e eficazes para gerenciar o TDAH e melhorar o foco, 
                a concentração e a qualidade de vida. Um guia completo para adultos e pais.
              </p>
              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-gray-600">4.9/5 (127 avaliações)</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
                  onClick={handlePurchase}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Processando...
                    </>
                  ) : (
                    <>
                      <Download className="w-5 h-5 mr-2" />
                      Comprar Agora - R$ 29,90
                    </>
                  )}
                </Button>
                <Button variant="outline" size="lg" className="px-8 py-3">
                  Ver Prévia Gratuita
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <img 
                  src={tdahCap1} 
                  alt="Capa do E-book TDAH" 
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            O que você vai aprender
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <img src={tdahCap1} alt="Capítulo 1" className="w-16 h-16 rounded-lg mb-4" />
                <CardTitle className="text-xl">Entendendo o TDAH</CardTitle>
                <CardDescription>
                  Aprenda o que é o TDAH e como identificar os sintomas de forma clara e objetiva.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Definição científica do TDAH</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Sintomas de desatenção</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Sintomas de hiperatividade</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <img src={tdahCap2} alt="Capítulo 2" className="w-16 h-16 rounded-lg mb-4" />
                <CardTitle className="text-xl">Técnicas Práticas</CardTitle>
                <CardDescription>
                  Estratégias que você pode usar em qualquer lugar para melhorar o foco e relaxar.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Técnica Pomodoro</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Exercícios de respiração</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Mindfulness prático</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <img src={tdahCap3} alt="Capítulo 3" className="w-16 h-16 rounded-lg mb-4" />
                <CardTitle className="text-xl">Guia para Pais</CardTitle>
                <CardDescription>
                  Como ajudar seus filhos com TDAH a desenvolverem foco e autocontrol.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Rotinas estruturadas</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Reforço positivo</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Ambiente organizado</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <img src={tdahCap4} alt="Capítulo 4" className="w-16 h-16 rounded-lg mb-4" />
                <CardTitle className="text-xl">Dicas para Adultos</CardTitle>
                <CardDescription>
                  Estratégias avançadas para gerenciar o TDAH na vida adulta.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Gerenciamento de tempo</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Organização pessoal</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Regulação emocional</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <img src={tdahCap5} alt="Capítulo 5" className="w-16 h-16 rounded-lg mb-4" />
                <CardTitle className="text-xl">Mais para Crianças</CardTitle>
                <CardDescription>
                  Atividades lúdicas e estratégias para o desenvolvimento infantil.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Jogos de foco</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Estratégias escolares</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Habilidades sociais</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="text-3xl font-bold text-gray-900 mb-2">500+</h4>
              <p className="text-gray-600">Pessoas já transformaram suas vidas</p>
            </div>
            <div>
              <div className="flex items-center justify-center mb-4">
                <BookOpen className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="text-3xl font-bold text-gray-900 mb-2">5</h4>
              <p className="text-gray-600">Capítulos completos e práticos</p>
            </div>
            <div>
              <div className="flex items-center justify-center mb-4">
                <Clock className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="text-3xl font-bold text-gray-900 mb-2">45min</h4>
              <p className="text-gray-600">Leitura rápida e aplicação imediata</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            O que nossos leitores dizem
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Finalmente encontrei técnicas que realmente funcionam! As estratégias são simples e posso usar em qualquer lugar."
                </p>
                <p className="font-semibold text-gray-900">- Maria Silva</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Como pai de uma criança com TDAH, este e-book me deu ferramentas práticas que mudaram nossa rotina familiar."
                </p>
                <p className="font-semibold text-gray-900">- João Santos</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Linguagem clara e técnicas eficazes. Consegui melhorar meu foco no trabalho em apenas uma semana!"
                </p>
                <p className="font-semibold text-gray-900">- Ana Costa</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl lg:text-4xl font-bold mb-6">
            Transforme sua vida hoje mesmo
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Não deixe o TDAH limitar seu potencial. Comece sua jornada de transformação agora!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3"
              onClick={handlePurchase}
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600 mr-2"></div>
                  Processando...
                </>
              ) : (
                <>
                  <Download className="w-5 h-5 mr-2" />
                  Comprar por R$ 29,90
                </>
              )}
            </Button>
          </div>
          <p className="text-sm mt-4 opacity-75">
            Garantia de 7 dias ou seu dinheiro de volta
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2025 TDAH: Técnicas Práticas. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App

