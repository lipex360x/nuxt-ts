import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { Book } from '@/entity'
import { $axios } from '@/utils/nuxt-instance'

@Module({ name: 'books', stateFactory: true, namespaced: true })
export default class Books extends VuexModule {

  private books = [] as Book[]
  private book = {} as Book

  private count = 0

  public get $count() {
    return this.count
  }

  @Mutation
  private SET_ALL(books: Book[]): void {
    this.books = books
  }

  private SET_SINGLE(book: Book): void {
    this.book = book
  }



  @Action
  public async index() {
    const books = await $axios.$get('/books')
    this.context.commit('SET_ALL', books)

    console.log('Axios Return', this.books)
  }

  @Mutation
  private INCREMENT(number: number) {
    this.count += number
  }

  @Action
  public increment(number: number) {
    this.context.commit('INCREMENT', number)
  }

  // @Action
  // public async index() {}

  // @Action
  // public async create() {}

  // @Action
  // public async show() {}

  // @Action
  // public async update() {}

  // @Action
  // public async delete() {}
}
